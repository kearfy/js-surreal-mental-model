'use client';

import { Surreal } from "surrealdb.js";

export const endpoint = 'ws://127.0.0.1:8000/rpc';
export const user = 'root';
export const pass = 'root';
export const ns = 'test';
export const db = 'test';

const surreal = new Surreal();
surreal.connect(endpoint, {
    ns, 
    db,
    auth: { user, pass }
});

export { surreal };