<?php

namespace App\Actions;

use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Lorisleiva\Actions\Concerns\AsAction;

class UpdateNumberPreferenceAction
{
    use AsAction, RedirectResponseBack;

    public function handle(Request $request, int $id): RedirectResponse
    {
        $customer = $request->user()
            ->customer()
            ->find($request->input('customer_id'));

        $number = $customer->number()->find($request->input('number_id'));

        $preference = $number->preference()->find($id);

        if(!$preference) {
            return $this->error();
        }

        $preference->update([
            'name' => $request->input('name'),
            'value' => $request->input('value')
        ]);
        return $this->success();

    }
}
