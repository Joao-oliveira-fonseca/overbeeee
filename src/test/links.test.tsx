import { describe, expect, it } from "vitest";
import { CONSOLE_TRYOUT_URL, DISCORD_INVITE_URL, INSTAGRAM_URL, PC_TRYOUT_URL, externalLinkProps } from "@/config/links";

describe("official links", () => {
  it("uses the official Instagram", () => expect(INSTAGRAM_URL).toBe("https://www.instagram.com/overbee.ow/"));
  it("uses the official Discord invite", () => expect(DISCORD_INVITE_URL).toBe("https://discord.gg/zYV9KNcr4"));
  it("tryouts go to Discord", () => {
    expect(PC_TRYOUT_URL).toBe(DISCORD_INVITE_URL);
    expect(CONSOLE_TRYOUT_URL).toBe(DISCORD_INVITE_URL);
  });
  it("opens in a new tab", () => expect(externalLinkProps.target).toBe("_blank"));
});
