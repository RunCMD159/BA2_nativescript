import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { PerformanceService } from './performance.service';

@Component({
    selector: "performance",
    templateUrl: "tabs/performance/performance.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent implements AfterViewChecked {
    performanceData: any = [];
    runningTime: number;

    isPerformanceTestRunning: boolean = false;
    //time in milliseconds
    private startTime: number;
    //time in milliseconds
    private endTime: number;


    constructor(private performanceService: PerformanceService,
                private changeDetector: ChangeDetectorRef) {
        this.initPerformanceData();
    }

    private initPerformanceData() {
        for (let i = 0; i < 10000; i++) {
            this.performanceData.push('TestString' + Math.floor((Math.random() * 10000) + 1));
        }
    }

    resetFields() {
        this.performanceData = [];
        this.isPerformanceTestRunning = false;
        this.runningTime = 0;
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        this.initPerformanceData();
    }

    ngAfterViewChecked(): void {
        if (this.isPerformanceTestRunning) {
            this.endTime = new Date().getTime();
            console.log('Performance Test has ended');
            this.runningTime = this.endTime - this.startTime;
            console.log(this.runningTime);
            this.changeDetector.markForCheck();
            this.changeDetector.detectChanges();
        }
    }

    runPerformanceTest() {
        this.isPerformanceTestRunning = true;
        console.log(this.performanceData.length);
        this.performanceService.runPerformanceTest(this.performanceData).subscribe((perfData) => {
            console.log('Performance Test Started');
            this.startTime = new Date().getTime();
            this.performanceData = perfData;
        })
    }
}
