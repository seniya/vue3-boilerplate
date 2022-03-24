import mitt, { Emitter } from 'mitt'

export type EventsType = {
  showToast: string;
};
const eventBus: Emitter<EventsType> = mitt<EventsType>()

export default eventBus
