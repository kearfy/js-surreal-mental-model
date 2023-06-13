export type Sticky = {
    id: string;
    title: string;
    content: string;
};

export type StickyUpdateable = Pick<Sticky, 'title' | 'content'>;