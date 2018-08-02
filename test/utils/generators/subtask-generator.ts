import { SubtaskSchema, TeambitionTypes } from '../../index'
import { uuid } from '../uuid'
import * as random from '../random'

export default function(limit: number, taskId: TeambitionTypes.TaskId) {
  const result: SubtaskSchema[] = []
  while (limit > 0) {
    limit--
    result.push({
      _id: uuid(),
      _taskId: taskId,
      content: 'subtask content: ' + uuid(),
      isDone: random.rnd(20),
      created: new Date(2016, random.number(1, 12), random.number(1, 31)).toISOString(),
    })
  }
  return result
}
