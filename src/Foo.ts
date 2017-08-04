import { inject, injectable, named } from 'inversify'

@injectable()
class Foo {
  @inject('string')
  @named('config-url')
  public url: string
}

export default Foo
