// playwright.config.ts
import { expect, defineConfig } from '@playwright/test';

expect.extend({
    toBeWithinRange(received: number, floor: number, ceiling: number) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => 'passed',
                pass: true,
            };
        } else {
            return {
                message: () => 'failed',
                pass: false,
            };
        }
    },
});

export default defineConfig({});
