import __post from './jsons/__postsSocial.json';
import { PostSocialDataType } from './types';

export const DEMO_POST_SOCIAL = __post.map((post, index): PostSocialDataType => {
    return {
        ...post,
    }
})