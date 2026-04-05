import { describe, expect, it } from "vitest";
import { buildStrategyDecision } from "../src/strategies/coreStrategy.js";

describe("wallet-autopilot-defi", () => {
  it("builds a trade-ready decision when the placeholder score is high", () => {
    const decision = buildStrategyDecision(
      {
        repo: "wallet-autopilot-defi",
        family: "generic",
        market: "scheduled and trigger-based DeFi actions",
        signal: "task schedules, balance thresholds, and action conditions",
        dryRun: true,
        orderSize: "25",
        privateKeyPreview: "test",
      },
      { score: 0.8 },
    );

    expect(decision.shouldTrade).toBe(true);
  });
});
