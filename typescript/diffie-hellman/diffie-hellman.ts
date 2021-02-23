export default class DiffieHellman {
    constructor(private readonly p: number, private readonly g: number) {
        if (g > p || !DiffieHellman.isPrime(p)) {
            throw new Error('invalid parameters')
        }
    }

    private static isPrime(num: number): boolean {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    public getPublicKeyFromPrivateKey(privateKey: number): number {
        if (privateKey <= 1 || privateKey >= this.p) {
            throw new Error('invalid parameters')
        }
        return (this.g ** privateKey) % this.p
    }

    public getSharedSecret(privateKey: number, publicKey: number): number {
        return (publicKey ** privateKey) % this.p
    }
}