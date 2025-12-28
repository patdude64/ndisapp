import fs from 'fs/promises';
import path from 'path';

export type ResourceItem = {
    name: string;
    type: 'file' | 'directory';
    path: string;
    children?: ResourceItem[];
};

export async function getResources(subPath: string = ''): Promise<ResourceItem[]> {
    // Use a relative path from the project root to access the parent directory
    // In a real deployed app, these files would need to be in 'public' or uploaded to a cloud storage
    // For this local tool, we access the parent folder directly.
    const rootDir = path.resolve(process.cwd(), '..');
    const targetDir = path.join(rootDir, subPath);

    try {
        const entries = await fs.readdir(targetDir, { withFileTypes: true });

        const items: ResourceItem[] = entries
            .filter(entry => {
                const name = entry.name;
                return !name.startsWith('.') && name !== 'ndis-portal' && name !== 'node_modules';
            })
            .map(entry => ({
                name: entry.name,
                type: entry.isDirectory() ? 'directory' : 'file',
                path: path.join(subPath, entry.name).replace(/\\/g, '/'),
            }));

        return items;
    } catch (error) {
        console.error("Error reading resources:", error);
        return [];
    }
}
