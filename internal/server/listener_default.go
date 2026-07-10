//go:build !windows

package server

import (
	"context"
	"net"
)

// optimizedListener creates a TCP listener tuned for high-throughput benchmarks.
// On non-Windows platforms, the default net.Listen with the OS-configured
// SOMAXCONN is sufficient — Linux/BSD kernels already handle backlog saturation
// gracefully with default settings.
func optimizedListener(ctx context.Context, addr string) (net.Listener, error) {
	return net.Listen("tcp", addr)
}
