import { APIError } from '@deepvision/api-kit';
import '@deepvision/test-kit-jest';
import * as nock from 'nock';
import Tg from '@/index';
import TelegramUsers from '@/modules/telegram-users';
/* [UGC import] */
/* [/UGC] */

describe('Tg', () => {
    test('must throw on missed "endpoint" argument', async () => {
        // @ts-ignore
        await expect(() => new Tg({})).toThrowWithCode(APIError, APIError.ENDPOINT);
    });

    test('must initialize successfully', () => {
        const tg = new Tg({ endpoint: 'https://tg.test' });

        /* [UGC modules] */
        /* [/UGC] */
        expect(tg.telegramUsers).toBeInstanceOf(TelegramUsers);
    });
});