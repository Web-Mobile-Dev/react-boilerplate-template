import { GithubRepoFormState } from 'app/containers/GithubRepoForm/types';
import { ThemeState } from 'styles/theme/types';
<<<<<<< HEAD
=======
import { ShobhitState } from 'app/containers/Shobhit/types';
>>>>>>> a82d01446a9136d5243ed6f7a132ca0f2fc70e89
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
<<<<<<< HEAD
=======
  shobhit?: ShobhitState;
>>>>>>> a82d01446a9136d5243ed6f7a132ca0f2fc70e89
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
