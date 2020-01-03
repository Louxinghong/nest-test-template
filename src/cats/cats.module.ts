import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// 使模块成为全局作用域，之后CatsService组件将无处不在，但CatsModule不会被导入
@Global()
@Module({
  // 控制器
  controllers: [CatsController],
  // 提供者
  providers: [CatsService],
  // 使CatsService可在几个模块之间共享
  exports: [CatsService],
})
export class CatsModule {
  // 将提供者注入到模块中
  constructor(private readonly catsService: CatsService) {}
}
