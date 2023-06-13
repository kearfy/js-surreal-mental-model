import useSWRMutation from 'swr/mutation'
import { StickyUpdateable } from './types'
import { updateSticky } from './modifiers'

export const useUpdateSticky = (thing: string) => useSWRMutation({
    action: 'update',
    thing
}, async (_, { arg }: { arg: StickyUpdateable }) => {
    return updateSticky(thing, arg);
})