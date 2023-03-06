import { Scope } from '@tamagui/create-context';
import React from 'react';
import { CreateNativeToastsOptions } from './types';
type NativeValue = boolean | ('web' | 'mobile');
interface CreateToastOptions {
    native: NativeValue;
}
interface ToastOptions extends CreateNativeToastsOptions {
    /**
     * Used when need custom data
     */
    additionalInfo?: Record<string, any>;
    native?: NativeValue;
}
type ScopedProps<P> = P & {
    __scopeToast?: Scope;
};
declare const createToast: (options: CreateToastOptions) => {
    ImperativeToastProvider: ({ __scopeToast, children, }: ScopedProps<{
        children: React.ReactNode;
    }>) => JSX.Element;
    useToasts: () => {
        toasts: {
            title: string;
            options: CreateNativeToastsOptions;
        }[];
        show(title: string, showOptions?: ToastOptions): void;
    };
};
export { createToast };
export type { CreateToastOptions };
//# sourceMappingURL=createToast.d.ts.map