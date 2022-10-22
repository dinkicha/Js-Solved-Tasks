function edit(ref, match, replacer) {
        const replaced = new RegExp(match, 'g');
        const result = ref.textContent.replace(replaced, replacer);
        ref.textContent = result;
}