import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Pipe({
  name: 'prefix',
})
export class PrefixPipe implements PipeTransform {
  constructor(private route: ActivatedRoute) {}

  transform(route: string[]): string[] {
    const segments: UrlSegment[] = this.route.firstChild?.snapshot?.url;
    if (segments?.length > 0) {
      const paths: string[] = segments.map((s: UrlSegment) => s.path);
      const prefix: string[] = paths && paths.includes('second') ? paths : [];
      return [...prefix, ...route];
    } else {
      return route;
    }
  }
}
