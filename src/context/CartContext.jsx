import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.product.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }
      }
      return { items: [...state.items, { ...action.product, qty: 1 }] }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.id !== action.id) }
    case 'SET_QTY':
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i,
        ),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({
      items: state.items,
      count: state.items.reduce((s, i) => s + i.qty, 0),
      total: state.items.reduce((s, i) => s + (i.price || 0) * i.qty, 0),
      add: (product) => dispatch({ type: 'ADD', product }),
      remove: (id) => dispatch({ type: 'REMOVE', id }),
      setQty: (id, qty) => dispatch({ type: 'SET_QTY', id, qty }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }),
    [state.items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
