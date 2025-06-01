export class Base62 {
    private static readonly ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private static readonly BASE = 62;

    static encode(id: number): string {
        if (id === 0) return this.ALPHABET[0];
        let result = '';
        while (id > 0) {
            result = this.ALPHABET[id % this.BASE] + result;
            id = Math.floor(id / this.BASE);
        }
        return result.padStart(6, '0'); // Ensure minimum length
    }

    static decode(str: string): number {
        let result = 0;
        for (const char of str) {
            result = result * this.BASE + this.ALPHABET.indexOf(char);
        }
        return result;
    }
}