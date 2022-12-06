export interface BlogFrontMatter {
  category: string;
  created: string;
  modified?: string;
  tags: string[];
  title: string;
};

export interface BlogBase extends BlogFrontMatter {
  slug: string;
};

export interface BlogData extends BlogBase {
  content: string;
}

export interface BlogPreview extends BlogBase {
  preview: string | null;
}
