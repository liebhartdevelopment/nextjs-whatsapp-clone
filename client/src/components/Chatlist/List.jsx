import React, { useEffect } from "react"
import axios from "axios"

import ChatLIstItem from "./ChatLIstItem"
import { GET_INITIAL_CONTACTS_ROUTE } from "@/utils/ApiRoutes"
import { useStateProvider } from "@/context/StateContext"
import { reducerCases } from "@/context/constants"

function List() {
  const [{ userInfo, userContacts, filteredContacts }, dispatch] =
    useStateProvider()

  useEffect(() => {
    try {
      const getContacts = async () => {
        const {
          data: { users, onlineUsers },
        } = await axios.get(`${GET_INITIAL_CONTACTS_ROUTE}/${userInfo.id}`)
        dispatch({ type: reducerCases.SET_USER_CONTACTS, userContacts: users })
        dispatch({ type: reducerCases.SET_ONLINE_USERS, onlineUsers })
      }
      if (userInfo?.id) {
        getContacts()
      }
    } catch (err) {
      console.error(err)
    }
  }, [userInfo])
  return (
    <div className='bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar'>
      {filteredContacts && filteredContacts.length > 0
        ? filteredContacts.map((contact) => {
            return <ChatLIstItem data={contact} key={contact.id} />
          })
        : userContacts.map((contact) => {
            return <ChatLIstItem data={contact} key={contact.id} />
          })}
    </div>
  )
}

export default List
