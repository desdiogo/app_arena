<?php

namespace App\Actions\Numbers;

use App\Http\Requests\Numbers\CreateOrUpdateNumberRequest;
use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Lorisleiva\Actions\Concerns\AsAction;

class UpdateNumberAction
{
    use AsAction, RedirectResponseBack;

    public function handle(CreateOrUpdateNumberRequest $request, int $id): RedirectResponse
    {
        $customer = $request->user()
            ->customer()
            ->find($request->input('id'));

        $number = $customer->number()->find($id);

        if(!$number) {
            return $this->error();
        }

        $number->update($request->all());
        return $this->success();
    }
}
