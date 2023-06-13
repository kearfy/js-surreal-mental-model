import { surreal } from "./surreal";
import { StickyUpdateable } from "./types";

export async function updateSticky(thing: string, payload: Partial<StickyUpdateable>) {
    const id = (thing.match(/^(?:sticky:)?([a-z0-9]{20})$/) ?? [])[1];

    if (payload.content && !payload.content.trim()) 
        throw new InvalidPayload('Content is empty');
    if (payload.title && !payload.title.trim()) 
        throw new InvalidPayload('Title is empty');

    return await surreal.merge<Partial<StickyUpdateable>>(`sticky:${id}`, payload);
}

