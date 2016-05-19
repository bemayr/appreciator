export const favouriteApp =
    state =>
        state.apps.reduce(
            (prev, curr) =>
            prev.appreciations > curr.appreciations ? prev : curr
        );
