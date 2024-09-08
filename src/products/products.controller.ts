import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    //
  }

  @Get()
  findAllProducts() {
    //
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    //
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    //
  }
}
