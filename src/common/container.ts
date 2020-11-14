

export class Container<T extends {key: string}> {
    #objects = new Map<string, T>();

    add(...unifiers: T[]) {
        for (let unifier of unifiers) {
            this.#objects.set(unifier.key, unifier);
        }
    }

    get(key: string) {
        if (!key) {
            throw new Error(`Schema unifier for hospital code '${key}' not found.`);
        }
        return this.#objects.get(key)!;
    }
}
