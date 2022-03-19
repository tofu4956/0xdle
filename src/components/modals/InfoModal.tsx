import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the 16bit(HEX, hexadecimal) number in 6 tries. After each guess,
        the color of the tiles will change to show how close your guess was to
        the 16bit number.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="B" />
        <Cell value="D" />
        <Cell value="1" />
        <Cell value="2" />
        <Cell value="3" />
        <Cell value="4" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number A is in the number and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="0" />
        <Cell value="2" />
        <Cell value="3" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="present"
        />
        <Cell value="1" />
        <Cell value="D" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number C is in the number but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="7" />
        <Cell value="8" />
        <Cell value="4" />
        <Cell value="1" />
        <Cell value="A" />
        <Cell value="B" />
        <Cell isRevealing={true} isCompleted={true} value="9" status="absent" />
        <Cell value="C" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 9 is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/tofu4956/0xdle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
