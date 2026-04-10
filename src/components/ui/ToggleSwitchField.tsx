interface ToggleSwitchFieldProps {
    title: string;
    description?: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

export const ToggleSwitchField = ({
    title,
    description,
    value,
    onChange
}: ToggleSwitchFieldProps) => {
    return (
        <div className="flex items-center justify-between mb-5">

            {/* text */}
            <div>
                <p className="font-semibold text-black dark:text-white">
                    {title}
                </p>
                {description && (
                    <p className="text-xs text-gray-500 dark:text-zinc-400">
                        {description}
                    </p>
                )}
            </div>

            {/* switch */}
            <button
                onClick={() => onChange(!value)}
                className={`
          w-10 h-6 flex items-center rounded-full p-1 transition-all duration-200
          ${value ? "bg-[#4F67CC]" : "bg-gray-300 dark:bg-zinc-700"}
        `}
            >
                <div
                    className={`
            w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-200
            ${value ? "translate-x-4" : "translate-x-0"}
          `}
                />
            </button>
        </div>
    );
};