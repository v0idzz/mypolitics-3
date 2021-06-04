export type ParsedPatreonType = "regular" | "gold" | "diamond";
export type ParsedPatreonTypeExceptRegular = Omit<ParsedPatreonType, "regular">;
