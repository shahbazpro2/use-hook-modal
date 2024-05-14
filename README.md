# Modal Management with Jotai

## Overview

This package provides utilities for managing modal states in a React application using Jotai. It includes functions to open, close, and retrieve the state of modals.

## Installation

You can install this package via npm:

```sh
npm install use-hook-modal
```

or via yarn:

```sh
yarn add use-hook-modal
```

## Usage

### Setting Up

1. **Import the Hooks:**

   In your component file, import the hooks from the package:

   ```javascript
   import { useGetSetModal, useModalState, useOpenCloseModal } from 'use-hook-modal'
   ```

2. **Initialize Modal State:**

   Use the `exampleKey` hook to initialize and manage the state of a modal by its key:

   ```javascript
   const [modalState, openCloseModal] = useGetSetModal('exampleKey')
   ```

### Example Component

Here’s an example of how to use these hooks in a component:

```javascript
import React from 'react'
import { useGetSetModal } from 'use-hook-modal'

const ExampleComponent = () => {
  const [modalState, openCloseModal] = useGetSetModal('exampleKey')

  const openModal = () => {
    openCloseModal({ key: 'exampleKey', status: true, data: { exampleData: 'Some data' } })
  }

  const closeModal = () => {
    openCloseModal({ key: 'exampleKey', status: false, data: null })
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
      {modalState?.status && <div>{modalState.data.exampleData}</div>}
    </div>
  )
}

export default ExampleComponent
```

### Hooks and Functions

#### `useGetSetModal`

A custom hook that returns the state and open/close function for a specific modal.

```javascript
const [modalState, openCloseModal] = useGetSetModal('exampleKey')
```

#### `useModalState`

Hook to get the state of a specific modal.

```javascript
const modalState = useModalState('exampleKey')
```

#### `useOpenCloseModal`

Hook to get the open/close modal function.

```javascript
const [openCloseModal] = useOpenCloseModal()
```

## Atoms

### `modalAtom`

The main atom that holds the state of all modals.

### `openCloseModalAtom`

An atom with a write function to open or close a modal based on its key.

## Type Definition

### `Modal`

Defines the structure of the modal state:

```typescript
type Modal = {
  [key: string]: {
    status: boolean
    data: any
  }
}
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

This setup provides a clean and efficient way to manage modal states using Jotai in a React application. The modular approach allows easy integration and management of multiple modals throughout your application.

For any issues or contributions, please open an issue or submit a pull request on the [GitHub repository](https://github.com/shahbazpro2/use-hook-modal).

Happy coding!
