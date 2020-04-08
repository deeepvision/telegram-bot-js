/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseTelegramUser {
    id: string;
    dateCreated?: string;
    username: string;
    name?: string;
    subscriptions?: Array<string>;
}

export interface BaseTelegramUserInput {
    username: string;
    name?: string;
    subscriptions?: Array<string>;
}

export interface BaseTelegramUserUpdateInput {
    username?: string;
    name?: string;
    subscriptions?: Array<string>;
}

export interface TelegramUser extends BaseTelegramUser {
    /* [UGC class] */
    /* [/UGC] */
}

export interface TelegramUserInput extends BaseTelegramUserInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface TelegramUserUpdateInput extends BaseTelegramUserUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
    ml?: boolean;
    lang?: string;
}

export interface TelegramUserGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface TelegramUserListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ml?: boolean;
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface TelegramUserListInput extends TelegramUserListQuery {
    lang?: string;
}

export interface TelegramUserList {
    messages: Array<TelegramUser>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
