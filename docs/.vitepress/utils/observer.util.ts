/**
 * 观察者
 * 用于实现发布订阅模式
 */
export class Observer {
  private _events: Map<String, Set<Function>>;
  public constructor() {
    this._events = new Map();
  }

  /**
   * 订阅事件
   * @param event 事件名
   * @param fn 取消订阅函数
   */
  public on(event: string, fn: Function): Function {
    const eventSet = this._events.get(event);
    if (eventSet) {
      eventSet.add(fn);
    } else {
      this._events.set(event, new Set([fn]));
    }
    return () => this.off(event, fn);
  }

  /**
   * 取消订阅
   * @param event 事件名
   * @param fn 取消订阅函数
   */
  public off(event: string, fn?: Function): void {
    const eventSet = this._events.get(event);
    if (eventSet) {
      if (fn) eventSet.delete(fn);
      else this._events.clear();
    }
  }

  /**
   * 触发时间
   * @param event 事件名
   * @param args 参数
   */
  public emit(event: string, ...args: any[]): void {
    const eventSet = this._events.get(event);
    if (eventSet) {
      eventSet.forEach((fn) => fn(...args));
    }
  }
}
