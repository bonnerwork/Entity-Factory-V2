import { FactoryExecutor } from './FactoryExecutor';

/**
 * Deep partial passed to factory and state definition methods allowing property
 * values to be resolved via T or () => T
 */
export declare type DeepFactoryPartial<T> = {
    [P in keyof T]?:
        | DeepFactoryPartial<T[P]>
        | DeepFactoryPartialMethod<DeepFactoryPartial<T[P]>>
};

/**
 * Method to resolve property within DeepFactoryPartial by calling a factory method
 */
export type DeepFactoryPartialMethod<Type> = (
    factory: FactoryExecutor,
) => Type | Promise<Type>;
