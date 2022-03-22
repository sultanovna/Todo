import React from 'react'

export const TodoFrom = () => {
  return (
    <form>
    <div className="form-control">
    <div className="input-group">
    <input type="text" placeholder="Add your task here..." className="input input-bordered w-full" />
    <button className="btn btn-square btn-lg">
      +
    </button>
  </div>
</div>
    </form>
  )
}
