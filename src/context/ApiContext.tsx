'use client'

import { Show, ShowList } from "@/types/showList";
import React, { useState } from "react";

type ApiProps = {
  children: React.ReactNode
}

type ApiContextType = {
  showList: ShowList
  setShowList: React.Dispatch<React.SetStateAction<ShowList>>
  show: Show
  setShow: React.Dispatch<React.SetStateAction<Show>>
  topShows: ShowList
  setTopShows: React.Dispatch<React.SetStateAction<ShowList>>
}

export const ApiContext = React.createContext({} as ApiContextType);
ApiContext.displayName = 'ApiContext';

const ApiProvider = ({ children }: ApiProps) => {
  const [showList, setShowList] = useState([] as ShowList);
  const [show, setShow] = useState({} as Show);
  const [topShows, setTopShows] = useState([] as ShowList);

  return (
    <ApiContext.Provider value={{
      showList, setShowList, show, setShow, topShows,
      setTopShows
    }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;