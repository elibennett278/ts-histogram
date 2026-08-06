/** Nearest-rank percentiles over collected samples. Zero dependencies. */
export class Samples {
  private xs: number[] = [];
  add(x: number): void { this.xs.push(x); }
  percentile(p: number): number {
    if (!this.xs.length) return 0;
    const xs = [...this.xs].sort((a, b) => a - b);
    const k = Math.max(0, Math.min(xs.length - 1, Math.ceil((p / 100) * xs.length) - 1));
    return xs[k];
  }
}
