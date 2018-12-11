import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, OnChanges {
  @ViewChild('vc', { read: ViewContainerRef }) public container: ViewContainerRef;
  @Input('properties') public properties;

  public factoryClass;
  public containerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('properties', this.properties);
  }

  dynamicAddToViewChild(selectedFactory) {
    const cmpFactory = this.resolver.resolveComponentFactory(selectedFactory);
    this.containerRef = this.container.createComponent(cmpFactory);
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      const factories = Array.from(this.resolver['_factories'].keys());
      let selectedFactory;
      factories.forEach((factory) => {
        factory['name'] === this.properties.componentName ? selectedFactory = factory : undefined;
      });

      this.dynamicAddToViewChild(selectedFactory);
    }, 1);
  }
}
