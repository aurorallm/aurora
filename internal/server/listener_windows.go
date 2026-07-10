//go:build windows

package server

import (
	"context"
	"net"
	"syscall"
)

// SO_CONDITIONAL_ACCEPT is the Windows socket option that changes TCP
// connection-accept behavior: instead of the TCP stack immediately sending
// RST when the listen backlog is saturated, connections are queued at the
// application level so Go's accept loop can drain them at its own pace.
// This is critical at 4000+ req/s on Windows where the default behavior
// can drop ~1% of connection attempts during burst load.
const soConditionalAccept = 0x3000

// optimizedListener creates a TCP listener tuned for high-throughput
// benchmarks on Windows. It sets SO_CONDITIONAL_ACCEPT so that transient
// backlog pressure does not cause WSAECONNREFUSED errors on the client.
//
// On non-Windows platforms this is a no-op — Linux/BSD kernels already
// handle backlog saturation gracefully with larger default queues.
func optimizedListener(ctx context.Context, addr string) (net.Listener, error) {
	lc := net.ListenConfig{
		Control: func(network, address string, c syscall.RawConn) error {
			return c.Control(func(fd uintptr) {
				// SO_CONDITIONAL_ACCEPT tells the Windows TCP/IP stack to
				// defer connection-accept decisions to the application,
				// preventing RST storms during transient accept-loop pauses.
				_ = syscall.SetsockoptInt(
					syscall.Handle(fd),
					syscall.SOL_SOCKET,
					soConditionalAccept,
					1,
				)
			})
		},
	}
	return lc.Listen(ctx, "tcp", addr)
}
