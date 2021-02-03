<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('type_id')->default(1);
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->string('fulltitle')->nullable();
            $table->unsignedBigInteger('inn')->index();
            $table->string('kpp')->nullable();
            $table->string('ogrn')->nullable();
            $table->string('guiv')->nullable();
            $table->string('okved')->nullable();
            $table->string('phone')->nullable();
            $table->string('fax')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('okato')->nullable();
            $table->string('oktmo')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('okpo')->nullable();
            $table->enum('industry', ['other', 'processing', 'mining'])->default('other');
            $table->boolean('activity')->nullable();
            $table->boolean('waste')->nullable();
            $table->boolean('registration')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('type_id')->references('id')->on('company_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
