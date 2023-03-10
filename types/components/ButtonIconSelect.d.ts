export declare const ButtonIconSelect: <T extends Object>({ options, value, onChange, group, }: {
    options: {
        value: T;
        text: string;
        icon: JSX.Element;
        testId?: string | undefined;
    }[];
    value: T | null;
    onChange: (value: T) => void;
    group: string;
}) => JSX.Element;
