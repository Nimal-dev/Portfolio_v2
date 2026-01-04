import React, { useState } from 'react';
import Skeleton from './Skeleton';

const ImageWithSkeleton = ({ src, alt, className = '', skeletonClassName = '', skeletonWidth = '100%', skeletonHeight = '100%', skeletonVariant = 'rect', wrapperClassName = '', wrapperStyle = {}, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`img-skeleton-wrapper ${wrapperClassName}`} style={{ position: 'relative', width: 'fit-content', height: 'fit-content', ...wrapperStyle }}>
            {!isLoaded && (
                <Skeleton
                    width={skeletonWidth}
                    height={skeletonHeight}
                    variant={skeletonVariant}
                    className={skeletonClassName}
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                {...props}
            />
        </div>
    );
};

export default ImageWithSkeleton;
