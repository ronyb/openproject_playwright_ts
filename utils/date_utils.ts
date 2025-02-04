import { format } from 'date-fns';

export function getTimestamp(formatStr: string): string {
    const now = new Date();
    return format(now, 'yyyy-MM-dd HH:mm:ss');
}