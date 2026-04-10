import { useEffect } from 'react';

/**
 * Custom hook to disable body scroll when modal is open
 * @param isOpen - Whether the modal is open
 */
export const useBodyScroll = (isOpen: boolean) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);
};
