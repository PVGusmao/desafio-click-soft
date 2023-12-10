import React, {Dispatch, SetStateAction, useContext, createContext, useState} from 'react';
import { IPosts } from '../screens/Home/Home';

export interface IAppContext {
  allPosts: IPosts[];
  setAllPosts: Dispatch<SetStateAction<IPosts[]>>
}

export const AppContext = createContext<IAppContext>(
  {} as IAppContext,
);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AppProvider({children}: Props) {
  const [allPosts, setAllPosts] = useState<IPosts[]>([]);
  return (
    <AppContext.Provider
      value={
        {
          allPosts,
          setAllPosts,
        } as IAppContext
      }>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): IAppContext {
  const context = useContext(AppContext);

  return context;
}