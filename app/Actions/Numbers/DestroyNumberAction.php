<?php

namespace App\Actions\Numbers;

use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Lorisleiva\Actions\Concerns\AsAction;

class DestroyNumberAction
{
    use AsAction, RedirectResponseBack;

    public function handle(Request $request, int $id): RedirectResponse
    {
        $customer = $request->user()
            ->customer()
            ->find($request->input('customer_id'));

        $number = $customer->number()->find($id);

        if(!$number) {
            return $this->error();
        }

        $number->delete();
        return $this->success();
    }
}
