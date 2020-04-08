/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import {
    APIError,
    parseResponse,
    ID,
} from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    TelegramUser,
    QueryParams,
    TelegramUserInput,
    TelegramUserListQuery,
    TelegramUserListInput,
    TelegramUserList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import TelegramUserController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): TelegramUserController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new TelegramUserController(id, this.http);
    }

    async list(input: TelegramUserListInput = {}): Promise<TelegramUserList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            lang,
            ml,
            ids,
            exclude,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: TelegramUserListQuery = {
            sort,
            text,
            ml,
            /* [UGC list-query] */
            /* [/UGC] */
        };

        if (Array.isArray(ids)) {
            query.ids = ids.join(',');
        } else {
            query.limit = limit;
            query.offset = offset;
        }

        if (Array.isArray(exclude)) {
            query.exclude = exclude.join(',');
        }

        const response = await this.http.get('/telegram-users', {
            query,
            headers: {
                'Accept-Language': lang,
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: TelegramUserInput, params: QueryParams = {}): Promise<TelegramUser> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            ml,
            lang,
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post('/telegram-users', data, {
            query: {
                ml: lang ? false : ml,
                /* [UGC create-query] */
                /* [/UGC] */
            },
            headers: {
                'Accept-Language': lang,
                /* [UGC create-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
