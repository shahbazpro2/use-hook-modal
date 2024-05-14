import { atom, useAtom } from 'jotai'
import React from 'react'

type Modal = {
  [key: string]: {
    status: boolean
    data: any
  }
}

export const modalAtom = atom<Modal>({})

export const useModal = () => useAtom(modalAtom)

export const openCloseModalAtom = atom(null, (get, set, { key, status, data }) => {
  const modal = get(modalAtom)
  if (!status) {
    set(modalAtom, {
      ...modal,
      [key]: {
        status,
        data: null,
      },
    })
  } else {
    set(modalAtom, {
      ...modal,
      [key]: {
        status,
        data,
      },
    })
  }
})

export const getModalAtom = (key: string) => atom((get: any) => get(modalAtom)[key])

export const useModalState = (key: string) => {
  const [modalVal] = useAtom(React.useMemo(() => getModalAtom(key), []))

  return modalVal
}

export const useOpenCloseModal = () => useAtom(openCloseModalAtom)

export const useGetSetModal = (key: string) => {
  const getModal = useModalState(key)
  const openCloseModal = useOpenCloseModal()

  return [getModal, openCloseModal]
}
