/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import { APIError, parseResponse, ID } from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    TelegramUser,
    QueryParams,
    TelegramUserGetInput,
    TelegramUserUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class TelegramUserController {
    private readonly http: HttpClient;
    private readonly id: ID;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(id: ID, http: HttpClient) {
        this.id = id;
        this.http = http;

        /* [UGC constructor] */
        /* [/UGC] */
    }

    public async get(input: TelegramUserGetInput = {}): Promise<TelegramUser> {
        const {
            ml,
            lang,
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/telegram-users/${this.id}`, {
            query: {
                ml,
                /* [UGC get-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC get-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async update(data: TelegramUserUpdateInput, params: QueryParams = {}): Promise<TelegramUser> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/telegram-users/${this.id}`, data, {
            query: {
                ml: lang ? false : ml,
                /* [UGC update-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC update-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/telegram-users/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
