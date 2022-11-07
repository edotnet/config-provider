import { inject, provide, type InjectionKey } from "vue";
import {
  TEMPLATES_PROVIDER_SYMBOL,
  type TemplateProvider,
} from "@/providers/template";
import {
  SPECIFICATION_PROVIDER_SYMBOL,
  type SpecificationProvider,
} from "@/providers/specification";

export const SPECIFICATION_SERVICE_SYMBOL = Symbol(
  "SPECIFICATION_SERVICE"
) as InjectionKey<SpecificationService>;

export class SpecificationService {
  constructor(
    private templatesProvider: TemplateProvider,
    private specificationProvider: SpecificationProvider
  ) {}

  public async getSpecifications() {
    const templatesRes = await this.templatesProvider.getTemplate();
    const specificationsRes =
      await this.specificationProvider.getSpecifications();

    return {
      template: templatesRes.data,
      specifications: specificationsRes.data,
    };
  }
}

provide(
  SPECIFICATION_SERVICE_SYMBOL,
  new SpecificationService(
    inject(TEMPLATES_PROVIDER_SYMBOL)!,
    inject(SPECIFICATION_PROVIDER_SYMBOL)!
  )
);
